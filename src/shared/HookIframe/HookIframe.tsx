import React from 'react';
import "./HookIframe.css";
import useToggle from "../Toggle/Toggle";
import ToggleCloseButton from "../Toggle/ToggleCloseButton";

const HookIframe: React.FC = () => {
    const [showHookIframe, toggleHookIframe] = useToggle(true);
    const run = () => {
        let htmlCode = (document.getElementById("html-code") as HTMLTextAreaElement).value;
        let cssCode = (document.getElementById("css-code") as HTMLTextAreaElement).value;
        let jsCode = (document.getElementById("js-code") as HTMLTextAreaElement).value;
        let output = (document.getElementById("output") as HTMLIFrameElement);

        if (output && output.contentDocument) {
            const doc = output.contentDocument;
            doc.open();
            doc.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <style>${cssCode}</style>
                </head>
                <body>
                    ${htmlCode}
                    <script>
                        ${jsCode}
                    </script>
                </body>
                </html>
            `);
            doc.close();
        };
    }

    return (
        <div className={`hook-iframe ${showHookIframe ? 'active' : 'inactive'}`}>
            <div className="left">
                <ToggleCloseButton onClick={toggleHookIframe} style={{top: "1vw"}}/>
                <label><i className="fa-brands fa-html5"></i>HTML</label>
                <textarea id="html-code" onKeyUp={run}></textarea>

                <label><i className="fa-brands fa-css3-alt"></i>CSS</label>
                <textarea id="css-code" onKeyUp={run}></textarea>

                <label><i className="fa-brands fa-js"></i>JAVASCRIPT</label>
                <textarea id="js-code" onKeyUp={run}></textarea>
            </div>
            <div className="right">
                <label><i className="bi bi-caret-right-fill"></i>Output</label>
                <iframe id="output"></iframe>
            </div>
        </div>
    );
};

export default HookIframe;
