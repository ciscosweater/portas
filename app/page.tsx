'use client';
import Cartao from "@/components/Cartao";
import EntradaNumerica from "@/components/EntradaNumerica";
import styles from "@/styles/Formulario.module.css";
import Link from "next/link";
import { useState } from 'react';

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)


  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade de portas" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Em qual porta estará o presente?" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Link href={`/jogo?portas=${qtdePortas}&temPresente=${comPresente}`}>
          <Cartao bgcolor="#28a085">
            <h2 className={styles.link}>Iniciar</h2>
          </Cartao>
        </Link>
      </div>
    </div>
  )
}
