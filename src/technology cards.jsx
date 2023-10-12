import './App.css';

function TechnologyCardItem() {
    return (
        <div className='cards-app-container'>
            <div className='ravi'>
            <div className='cards-list-container'>
                <h1 className='heading' style={{marginLeft:"100px"}}>Learn 4.0 Technologies</h1>
                <p className='description ' style={{marginLeft:"100px"}}>Get Trained by alumni of IITs and top companies like AMAZON,Microsoft,
                Intel,Nvidia,Qualcom etc.Learn directly from professionals involved in Product Development.</p>
            </div>
            <div className='ram'>
            <div className='card11'>
                <h3>Data Scientist</h3>
                <p>Data Scientist gather and analyze large <br/> sets of structured unstructured data.</p>
                <img src='https://assets.ccbp.in/frontend/react-js/data-scientist-img.png' style={{marginLeft:"300px"}} />
            </div>
            <div className='card21'>
                <h3>IOT developer</h3>
                <p>IOT developers are professionals who can <br/> develop ,manage,and monitor IOT devices.</p>
                <img src='https://assets.ccbp.in/frontend/react-js/iot-developer-img.png' style={{marginLeft:"300px"}}/>
            </div>
            </div>
            <div className='ram1'>
            <div className='card31'>
                <h3>VR developer</h3>
                <p>A VR developer creates completely new <br/> digital enviornments that people can see.</p>
                <img src='https://assets.ccbp.in/frontend/react-js/vr-developer-img.png' style={{marginLeft:"300px"}}/>
            </div>
            <div className='card41'>
                <h3>ML Engineer</h3>
                <p>Mechine Learning engineers feed data <br/> into models defined by data Scientists.</p>
                <img src='https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png' style={{marginLeft:"300px"}}/>
            </div>
            </div>
            </div>
        </div>
    );
}

export default TechnologyCardItem;