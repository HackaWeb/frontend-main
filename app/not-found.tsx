import Link from "next/link";

const NotFound = () => {
    return (
        <div className="mt-10 text-center">
            <h1>Упс!</h1>
            <div className="text-xl">Такої сторінки не знайдено</div>
            <Link
                href="/"
                className="text-purple hover:text-purple-dark duration-300 mt-5"
            >
                Повернутися на головну...
            </Link>
        </div>
    );
};

export default NotFound;
