export default function Banner({ isAbout }) {
	return (
	  <div className={`banner-container ${isAbout ? 'about-banner' : ''}`}>
		{!isAbout && (
		  <div className="banner-text-container">
			<div className="banner-text">Chez vous, partout et ailleurs</div>
		  </div>
		)}
		{isAbout && <div className="aboutBackground wh-msk"></div>}
	  </div>
	);
  }
  