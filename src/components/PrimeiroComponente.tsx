'use client'
export function PrimeiroComponente() {

    function handleClick() {
        //console.log("Clique aqui")
        print()
    }

    return (
        <div>
            PC

            <button onClick={handleClick}> CLIQUE</button>
        </div>
    )
}