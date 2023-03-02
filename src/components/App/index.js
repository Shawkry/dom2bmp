import { useRef} from 'react'
import html2canvas from 'html2canvas'
import canvas2image from "canvas2image-2";
import './index.css';
export const App = () => {
    // 获取模版dom
    const divf = useRef()
    // 获取bmp图片函数
    const getImg = async () => {
        // dom转成canvas
        const canvas = await html2canvas(divf.current)
        // canvas转bmp
        const img =  canvas2image.convertToBMP(canvas)
        // 下载bmp图片
        img.onload = () => {
            const a = document.createElement('a');
            // 设置下载文件名
            a.download = 'test';
            a.href = img.src;
            a.click();
        }
    }
    return (
        <div className="App">
           {/*模版dom*/}
            <div ref={divf} class="divf">
                <div class="divf2">
                    <div class="divline">
                        <h1 class="divtxt">文字标题</h1>
                    </div>
                    <div class="divline">
                        <div class="div1 divtxt">计划产量</div>
                        <div class="div2"></div>
                    </div>
                    <div class="divline">
                        <div class="div1 divtxt">实际产量</div>
                        <div class="div2"></div>
                    </div>
                    <div class="divline">
                        <div class="div1 divtxt">差异数量</div>
                        <div class="div2"></div>
                    </div>
                </div>
            </div>
            <button className={'btn'} onClick={async ()=>{await getImg()}}>
                下载bmp图片
            </button>
        </div>

    );
}

