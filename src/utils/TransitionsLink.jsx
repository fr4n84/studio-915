'use client'
//Import Next fuctions
import Link from "next/link"
//Import useRouter
import { useRouter } from "next/router"
export default function TransistionLink({children, href, ...props}) {
    const router = useRouter()

    const handleTransitios = async (e) => {
        e.preventDefault()

        router.push(href)
    }
    return(
        <Link onClick={handleTransitios} href={href} {...props}>{children}</Link>
    )
}