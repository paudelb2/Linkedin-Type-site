import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleleft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets__articleright'>
                <h4>
                    {heading}
                </h4>
                <p>
                    {subtitle}
                </p>
            </div>
        </div>
    );

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>

        </div>
        {newsArticle("Elon Musk reaches Mars", "Top news - 99238 readers")}
        {newsArticle("Chinese stocks on the rise", "Stocks - 17649 readers")}
        {newsArticle("Tesla stocks reach an all time high", "Stocks - 889 readers")}
        {newsArticle("Bitcoin breaks $120k", "Crypto - 9999 readers")}
        {newsArticle("Coronavirus USA updates", "Top news - 12038 readers")}
        {newsArticle("Lucid reveals X1 model E", "Cars - 1358 readers")}

    </div>
  )
}

export default Widgets