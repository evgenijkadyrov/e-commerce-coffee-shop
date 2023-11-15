import React, {FC} from 'react';
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
    href: string;
    imageSrc: string;
    alt: string;
    text: string;
}

const MenuPageItem: FC = () => {
    return (
        <div className="flex-col">
            <div className="text-3xl font-bold black mt-2 ml-5 p-3">Menu</div>
            <div className="text-2xl font-bold black mt-6 ml-5 p-3" style={{ borderBottom: '1px solid grey' }}>Drinks</div>
            <div className="flex justify-around items-center mt-10">
                <MenuItemLink href="/coffee" imageSrc="/images/pumpkin_spice_creme-removebg-preview.png" alt="coffee" text="Hot coffee" />
                <MenuItemLink href="/tea" imageSrc="/images/earl-grey-removebg-preview.png" alt="tea" text="Hot tea" />
                <MenuItemLink href="" imageSrc="/images/steamed_apple_juice-removebg-preview.png" alt="juice" text="Hot juice" />
            </div>
        </div>
    );
};

const MenuItemLink: FC<MenuItemProps> = ({ href, imageSrc, alt, text }) => {
    return (
        <div className="m-5">
            <Link href={href} className="flex items-center">
                <div className="rounded-full bg-dark-green flex justify-center" style={{ width: '150px' }}>
                    <Image src={imageSrc} alt={alt} width={100} height={100} />
                </div>
                <div className="text-2xl text-dark-green font-bold ml-2 text-justify">{text}</div>
            </Link>
        </div>
    );
};


export default MenuPageItem;