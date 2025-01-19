import { motion } from "framer-motion";

export default function JobDescriptionModal (props) {
    const { open, onClose, onApplyNow } = props;

		if (!open) return null;

    return (
			<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ duration: 0.3 }}
					className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6"
				>
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-2xl font-semibold">Job Description</h2>
						<button onClick={onClose} className="text-gray-500 hover:text-gray-700">
							✖
						</button>
					</div>

					<div className="space-y-4 text-gray-700">
						<p>
							We are a SaaS product-based company dedicated to delivering 
							innovative solutions with cutting-edge technologies including 
							<b> React, React Native, Material UI, and Next.js</b>. Our focus is 
							on creating exceptional UI solutions and delivering outstanding web 
							development projects that drive our products forward.
						</p>

						<h3 className="font-semibold text-lg">Position: Frontend Developer</h3>

						<h4 className="font-semibold">Responsibilities:</h4>
						<ul className="list-disc list-inside text-sm">
							<li>Create world-class UI solutions.</li>
							<li>Collaborate with the team on development.</li>
							<li>Continuously learn, share, and improve skills.</li>
						</ul>

						<h4 className="font-semibold">Requirements:</h4>
						<ul className="list-disc list-inside text-sm">
							<li>Passion for JavaScript and React.</li>
							<li>1-3 years of frontend development experience.</li>
							<li>Strong UI/UX skills and animations understanding.</li>
							<li>Ability to work independently on code solutions.</li>
							<li>Good communication skills in English.</li>
						</ul>

						<h4 className="font-semibold">What We Offer:</h4>
						<ul className="list-disc list-inside text-sm">
							<li>Collaborative and supportive environment.</li>
							<li>Opportunities for professional growth.</li>
							<li>Exciting and challenging projects.</li>
						</ul>

						<h3 className="font-semibold">Industry: <span className="font-normal">Software Development</span></h3>
						<h3 className="font-semibold">Employment Type: <span className="font-normal">Full-time</span></h3>

					</div>

					<div className="flex justify-end mt-6">
						<button onClick={onApplyNow} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
							Apply Now
						</button>
					</div>
				</motion.div>
			</div>
  );
}
