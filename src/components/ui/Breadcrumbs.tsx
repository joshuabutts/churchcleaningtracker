import Link from "next/link";

interface BreadcrumbsProps {
    href: string;
    parent: string;
    currentPage?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ href, parent, currentPage }) => {

    return (
        <div className="flex items-center">
            <Link href={href} className="hover:underline">
                <span className="text-gray-500">{parent}</span>
            </Link>
            <div className="divider p-2">/</div>
            {currentPage && (
                <Link href={href} className="hover:underline">
                    <span className="text-gray-500">{currentPage}</span>
                </Link>
            )}
        </div>
    )
};
