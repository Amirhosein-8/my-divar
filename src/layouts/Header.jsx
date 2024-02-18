import React from 'react';

function Header() {
	return (
		<div className="flex items-center justify-between w-full">
			{/* right */}
			<div>
				<img className="h-12 w-12" src="divar.svg" alt="" />
			</div>
			{/* left */}
			<div className="flex items-center gap-x-7">
				{/* my divar */}
				<div className="flex items-center gap-x-2">
					<img src="profile.svg" alt="" />
					<p>دیوار من </p>
				</div>
				{/* add post */}
				<button className="bg-rose-700 p-1.5 rounded-md">ثبت اگهی</button>
			</div>
		</div>
	);
}

export default Header;
