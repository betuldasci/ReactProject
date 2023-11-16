import React, { Component } from 'react';

class Topbar extends Component {
    render() {
        return (
            <div className='header-top bg-grey text-muted'>
                <ul className='right list-unstyled'>
                    <li className='text-muted'>İndirim Kuponları</li>
                    <li className='text-muted'>Satış Yap</li>
                    <li className='text-muted'>Yardım Sorular</li>
                </ul>
            </div>
        );
    }
}

export default Topbar;
