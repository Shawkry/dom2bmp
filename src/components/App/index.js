import { useRef} from 'react'
import html2canvas from 'html2canvas'
import canvas2image from "canvas2image-2";
import './index.css';
import { Button } from 'antd';
import 'antd/dist/reset.css';
export const App = () => {
    const divf = useRef()
    const getImg = async () => {
        // dom转成canvas
        html2canvas(divf.current,).then((canvas) => {
            const newCanvas = document.body.appendChild(canvas);
            // canvas 转成bmp
            const img =  canvas2image.convertToBMP(canvas)
            // 下载bmp图片
            img.onload = () => {
                const a = document.createElement('a');
                a.download = 'test';
                a.href = img.src;
                a.click();
                // 删除canvas
                newCanvas.remove();

            }
        })
    }
    return (
        <div className="App">
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
            <Button className={'btn'} onClick={async ()=>{await getImg()}}>
                下载bmp图片
            </Button>
        </div>

    );
}

