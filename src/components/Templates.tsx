interface TemplateProps {
    children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
    return (
        <>
        // header
        
        {props.children}


        //footer
        </>
    )
}

const Header: React.FC = () => {
    return (
        <header className="bg-red-600 text-white py-3">
            <div className="container mx-auto flex items-center justify-between px-4">
                <h1 className="text-3x1 font-bold">Imagem Peça</h1>
            </div>
        </header>
    )
}

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-500 text-white py-3">
            <div className="container mx-auto flex items-center justify-between px-4">
                <h1 className="text-4x1 font-bold">Lôbo</h1>
            </div>
        </footer>
    )
}