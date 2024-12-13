interface SectionProps {
    title: string;
    id: string;
    description?: string;
}

const Section: React.FC<SectionProps> = ({ title, id, description = 'TEEEST' }) => {
    return (
        <section id={id} className="py-16 px-4 bg-gray-50">
            <div className="max-w-screen-lg mx-auto flex items-center space-x-8">
                <div className="flex-shrink-0">
                    <img
                        src="https://via.placeholder.com/240"
                        alt="Autor"
                        className="w-60 h-60 rounded-full object-cover shadow-lg"
                    />
                </div>

                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
                    <p className="text-gray-600 text-lg">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default Section;