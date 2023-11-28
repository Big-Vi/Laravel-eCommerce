import { Link } from '@inertiajs/react'

export default function Pagination({links}) {
    return (
        <div>
            {links.length > 3 ?
                <nav>
                    <ul className="pagination">
                        {links.map(({active, label, url}) => {
                            return (
                                <li key={label} className={active ? 'active' : ''}>
                                    <a href={url}><span dangerouslySetInnerHTML={{ __html: label }}></span></a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                :
                null
            }
        </div>
    )
}
