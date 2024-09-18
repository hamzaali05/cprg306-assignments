import Link from "next/link";

export default function StudentInfo() {
    return(
        <div>
            <h1>
                Hamza Ali
            </h1>
            <Link href={"https://github.com/hamzaali05?tab=repositories"}>
            Github repository
            </Link>
        </div>
    )
}