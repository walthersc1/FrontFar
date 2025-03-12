import Link from "next/link"

export default function Navebar() {
    return (
      <div >
        <Link href={"/apps/Menu"}>Inicio</Link>
        <Link href={"/apps/Stock"}>Stock</Link>
        
      </div>
    );
  }
  