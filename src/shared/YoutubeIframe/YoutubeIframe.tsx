import React, {CSSProperties} from 'react';
import "./YoutubeIframe.css";

interface YoutubeProps {
    src: string;
    style?: CSSProperties;
}
const YoutubeIframe: React.FC<YoutubeProps> = ({src, style }) => {
    return (
        <iframe className="youtube-iframe" src={src} style={style} title="YouTube video player" allowFullScreen={true}/>
    );
};

export default YoutubeIframe;
