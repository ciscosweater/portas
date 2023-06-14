'use client';
import styles from "@/styles/Jogo.module.css"
import Porta from "@/components/Porta";
import { atualizarPortas, criarPortas } from "@/functions/portas";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PortaModel from "@/model/porta";

export default function Jogo() {
    const [valido, setValido] = useState(false);
    const [portas, setPortas] = useState<PortaModel[]>([]);

    const searchParams = useSearchParams()

    const qtde = Number(searchParams.get('portas'))
    const temPresente = Number(searchParams.get('temPresente'))

    useEffect(() => {
        const qtdePortasValida = qtde >= 3 && qtde <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= qtde

        setValido(qtdePortasValida && temPresenteValido)
    }, [qtde])

    useEffect(() => {
        setPortas(criarPortas(qtde, temPresente))
    }, [searchParams])

    function renderizarPortas() {
        return valido && portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}