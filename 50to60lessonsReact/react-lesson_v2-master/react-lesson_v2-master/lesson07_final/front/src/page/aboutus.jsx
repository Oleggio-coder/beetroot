import { useState } from 'react'


export default function About() {
    const [tabs, setTabs] = useState(1)

    const Toggle = (index) => {
        setTabs(index)
    }
    return (
        <div className="tabs">
            <div className="tabs__row">
                <div className={tabs === 1 ? 'tabs__item tabs__item--active' : 'tabs__item'} onClick={() => Toggle(1)}>Tab1</div>
                <div className={tabs === 2 ? 'tabs__item tabs__item--active' : 'tabs__item'} onClick={() => Toggle(2)}>Tab2</div>
                <div className={tabs === 3 ? 'tabs__item tabs__item--active' : 'tabs__item'} onClick={() => Toggle(3)}>Tab3</div>
            </div>
            <div className="tabs__content">
                <div className={tabs === 1 ? 'tabs__content-item tabs__content-item--active' : 'tabs__content-item'}>
                    <p>1111 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, eligendi.</p>
                </div>
                <div className={tabs === 2 ? 'tabs__content-item tabs__content-item--active' : 'tabs__content-item'}>
                    <p>2222 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, eligendi.</p>
                </div>
                <div className={tabs === 3 ? 'tabs__content-item tabs__content-item--active' : 'tabs__content-item'}>
                    <p>3333 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, eligendi.</p>
                </div>
            </div>
        </div>
    )
}