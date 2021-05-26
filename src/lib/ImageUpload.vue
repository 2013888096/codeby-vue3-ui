<template>
  <div>
    <input type="file"
           id="upload"
           @change="uploadChange" />
  </div>

</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    isCompress: {
      type: Boolean,
      default: true,
    },
    ImageBase64R: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const ACCEPT = ref(["image/jpg", "image/png"]);
    const MAXSIZE = ref(1024 * 1024);
    const MAXSIZE_STR = ref("1MB");
    // const isCompress = ref(true);
    //获取图片base64编码
    const convertImageToBase64 = (file, callback) => {
      let reader = new FileReader();
      reader.addEventListener("load", (e) => {
        const base64Image = e.target.result;
        callback && callback(base64Image);
        //回收机制
        reader = null;
      });
      //读取文件对象
      reader.readAsDataURL(file);
    };

    //压缩算法
    const compress = (base64Image, callback) => {
      //默认压缩最大宽高
      let maxW = 1024;
      let maxH = 1024;
      const image = new Image();

      image.addEventListener("load", (e) => {
        let ratio; //图片得压缩比
        let needCompress = false; //是否需要压缩
        // console.log(image.naturalWidth, image.naturalHeight);
        //判断上传图片得自然宽度和高度，并计算最佳压缩宽高比
        if (maxW < image.naturalWidth) {
          needCompress = true;
          //计算压缩宽度比例
          ratio = image.naturalWidth / maxW;
          //计算最佳压缩高度比
          maxH = image.naturalHeight / ratio;
        }
        if (maxH < image.naturalHeight) {
          needCompress = true;
          ratio = image.naturalHeight / maxH;
          maxW = image.naturalWidth / ratio;
        }
        //若图片实际宽高小于最大压缩宽高比，则不需压缩
        if (!needCompress) {
          maxW = image.naturalWidth;
          maxH = image.naturalHeight;
        }
        const canvas = document.createElement("canvas");
        canvas.setAttribute("id", "__compress__");
        canvas.width = maxW;
        canvas.height = maxH;
        canvas.style.visibility = "hidden";

        document.body.appendChild(canvas);

        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, maxW, maxH);

        //第一次压缩(尺寸比例压缩)
        ctx.drawImage(image, 0, 0, maxW, maxH);
        //第二次压缩(图片质量压缩)
        const compressImage = canvas.toDataURL("image/jpeg", 0.9);

        callback && callback(compressImage);
        canvas.remove();
      });
      image.src = base64Image;
      //   document.body.appendChild(image);
    };

    const uploadToServer = (compressImage) => {
      context.emit("update:ImageBase64R", compressImage);
      console.log("upload to server ...", compressImage);
    };
    const normalUploadToServer = (base64Image) => {
      context.emit("update:ImageBase64R", base64Image);
      console.log("upload to server ...", base64Image);
    };
    //监听图片上传事件
    const uploadChange = (e) => {
      //解构赋值
      const [file] = e.target.files;
      if (!file) {
        return;
      }
      const { type: fileType, size: fileSize } = file;
      //图片类型检查
      if (!ACCEPT.value.includes(fileType)) {
        alert("不支持[" + fileType + "]文件类型!");
        return;
      }

      //图片容量检查
      if (fileSize > MAXSIZE) {
        alert(`文件超出${MAXSIZE_STR}!`);
      }

      //判断是否压缩
      if (props.isCompress) {
        //执行压缩图片方法
        convertImageToBase64(file, (base64Image) =>
          compress(base64Image, uploadToServer)
        );
      } else {
        convertImageToBase64(file, normalUploadToServer);
      }
    };

    return { uploadChange };
  },
};
</script>
<style lang="scss">
</style>