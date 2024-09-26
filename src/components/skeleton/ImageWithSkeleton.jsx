/* eslint-disable react/prop-types */
import { useState } from "react";
import Skeleton from "react-loading-skeleton";


const ImageWithSkeleton = ({ src, alt, width, height }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div style={{ width, height, position: "relative" }}>
            {!imageLoaded && <Skeleton height={140} width={250} />}
            <img
                src={src}
                alt={alt}
                style={{
                    display: imageLoaded ? "block" : "none",
                    width: width,
                    height: height,
                }}
                onLoad={() => setImageLoaded(true)}
            />
        </div>
    );
};
export default ImageWithSkeleton
