import React, {FC, PropsWithChildren} from 'react';
import cn from 'clsx'

const Heading:FC<PropsWithChildren<{className?:string}>> = ({children, className}) => {
    return (
        <h1 className={cn('font-black text-green text-6xl w-1/4 ml-auto mt-8 text-right leading-tight', className)}>
            {children}
        </h1>
    );
};

export default Heading;