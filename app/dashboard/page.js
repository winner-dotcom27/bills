import Image from "next/image";

export default function () {
    return (
        <main>
            <p>User dashboard</p>
            <p>Propose a UI design</p>
            <p>Build the UI</p>
            <p>Propose possible changes</p>

            <Image width={480} height={240} src="/instructor.webp" alt="a screenshot"/>
        </main>
    )
}