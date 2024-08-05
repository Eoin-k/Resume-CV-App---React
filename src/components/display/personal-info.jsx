export default function PersonalInfo(props) {
	const personaldata = props.info[0];
	return (
		<div id="personal-info" className="personal-info">
			<div className="name-title-wrapper">
				<h3 className="person-name">{personaldata.name}</h3>
				<p className="person-title">{personaldata.title}</p>
			</div>
			<div className="sidebar-header">
				<h4>Personal Info</h4>
			</div>
			<div className="sidebar-item">
				<div className="item-inner-wrapper">
					<span className="item-heading">Phone</span>
					<p className="item-detail">{personaldata.phone}</p>
				</div>
			</div>
			<div className="sidebar-item">
				<div className="item-inner-wrapper">
					<span className="item-heading">Email</span>
					<p className="item-detail">{personaldata.email}</p>
				</div>
			</div>
			<div className="sidebar-item">
				<div className="item-inner-wrapper">
					<span className="item-heading">LinkedIn</span>
					<p className="item-detail">{personaldata.linkedin}</p>
				</div>
			</div>
			<div className="sidebar-item">
				<div className="item-inner-wrapper">
					<span className="item-heading">Twitter</span>
					<p className="item-detail">{personaldata.twitter}</p>
				</div>
			</div>
		</div>
	);
}
