import Image from "next/image";

export default function Motivation() {
return (
    <section className="relative overflow-hidden bg-cookie-dark px-8 py-16 text-center text-cookie-light">
        <Image
        src="/cookies/motivation-1.png"
        alt=""
        width={220}
        height={220}
        className="absolute -left-12 bottom-4 w-40"
        />
        <Image
        src="/cookies/motivation-2.png"
        alt=""
        width={220}
        height={220}
        className="absolute -right-12 bottom-0 w-40"
        />

        <h2 className="relative text-2xl font-bold">Our Motivation</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed">
        Creemos que una buena galletita no se come sola, se comparte, y es en ese gesto donde vive el verdadero sabor de la marca.
        Hay algo que pasa cuando alguien te trae una galletita hecha en casa. No es solo el sabor, es s
        aber que alguien se tomó el tiempo. Que eligió los ingredientes, que amasó, que pensó en vos.
        Mai Cookies existe en ese espacio. En la mesa  donde todos se juntan sin razón especial. En la 
        caja que aparece un martes y hace que el día 
        valga más.
        </p>
    </section>
);
}
