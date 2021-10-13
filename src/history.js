import './App.css';

function HistoryCard(props) { 
    return (
        <div className="card" style={{width: 300}}>
            <div className="container">
                <div class="e-card" id="vertical_business">
                    <div class="e-card-header">
                        <div class="e-card-header-caption">
                            <div class="e-card-header-title">Intercation Hostory</div>
                        </div>
                    </div>
                    <div class="e-card-actions">
                        <div>
                            <div className='contact-name'>Voice</div>
                            <div className='contact-value'>{ props.dataSource.history.voice }</div>
                        </div>
                        <div>
                            <div className='contact-name'>Mail</div>
                            <div className='contact-value'>{ props.dataSource.history.mail }</div>
                        </div>
                        <div>
                            <div className='contact-name'>Chat</div>
                            <div className='contact-value'>{ props.dataSource.history.chat }</div>
                        </div>
                        <div>
                            <div className='contact-name'>Voice</div>
                            <div className='contact-value'>{ props.dataSource.history.voice }</div>
                        </div>
                        <div>
                            <div className='contact-name'>Mail</div>
                            <div className='contact-value'>{ props.dataSource.history.mail }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryCard;