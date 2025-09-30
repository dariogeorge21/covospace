import React from "react"
const RightClipped = ({ children, className = " " }: { children: React.ReactNode, className?: string }) => {
    return (
        <div style={{ clipPath: "polygon(calc(100% - 150px) 30px, calc(100% - 100px) 0px, 100% 0px, 100% 100%, 0 100%, 0 30px)" }} className={`${className}`}>
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
        // return (
        //     <div style={{ clipPath: "polygon(100px 30px, 150px 0px, 100% 0px, 100% 100%, 0 100%, 0 30px)" }} className={`${className}`}>
        //         {React.Children.map(children, (child) => {
        //             if (React.isValidElement(child)) {
        //                 return React.cloneElement(child, {
        //                     className: `${child.props.className || ''} w-full h-full object-cover `.trim()
        //                 });
        //             }
        //             return child;
        //         })}
        //     </div>
        // );
}


export default RightClipped;