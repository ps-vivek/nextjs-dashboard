
import localFont from 'next/font/local';

export const inter = localFont(
    {
        src: [
            {
                path: '/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
                weight: '400',
                style: 'normal',
            }
        ],
        variable: '--font-inter',
    }
);


export const lusitana = localFont(
    {
        src: [
            {
                path: '/fonts/Lusitana-Bold.ttf',
                weight: '400',
                style: 'normal',
            }

        ],
        variable: '--font-lusitana',
    }
);