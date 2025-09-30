import React from "react"
const LeftClipped = ({ children, className = " " }: { children: React.ReactNode, className?: string }) => {
    return (
        <div style={{ clipPath: "polygon(100px 0, 150px 30px, 100% 30px, 100% 100%, 0 100%, 0 0)" }} className={`${className}`}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        className: `${child.props.className || ''} w-full h-full object-cover `.trim()
                    });
                }
                return child;
            })}
        </div>
    );
}


export default LeftClipped;