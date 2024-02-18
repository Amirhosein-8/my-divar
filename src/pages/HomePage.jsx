import SideBareHome from '../components/templates/SideBareHome';
import MainItemHome from '../components/templates/MainItemHome';

function HomePage() {
	return (
		<div className="my-10 flex items-center justify-between">
			<SideBareHome />
			<MainItemHome />
		</div>
	);
}

export default HomePage;
