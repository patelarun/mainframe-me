"use client";
import Image from "next/image";
import { useState } from "react";
import FrontendJobDescriptionDialog from "@/components/FrontendJobDescriptionDialog/index";

const mailTo = `mailto:jobb@birdvision.se?subject=Frontend Developer Application&body=${encodeURIComponent(
    `Dear Hiring Team,

I am interested in applying for the Frontend Developer position.

🔗 Portfolio: 
📌 Work References: 

🕒 Can work fixed time schedule: 
🏡 Work-from-home setup available: 

💻 Experience:
- JavaScript: 
- ReactJS: 
- ReduxJS: 

I have attached my resume. Looking forward to your response.

Best regards,
[Your Name]
[Your Contact Information]
`)}`;

export default function JobsPage() {
	const [showJobDescription, setShowJobDescription] = useState(false);

	const onClickJobListItem = (event) => {
		event.stopPropagation();
		setShowJobDescription(true);
	}

	const onCloseJobDescription = () => {
		setShowJobDescription(false);
	}

	const onClickApplyNow = (event) => {
		event.stopPropagation();
		window.open(mailTo, '_blank');
	}

  return (
    <div className="pt-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Job Opportunities</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
          <p className="text-gray-600 mb-4">
            Looking for exciting opportunities? Here are some positions we're currently hiring for:
          </p>
          
          <div className="w-full bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={onClickJobListItem}>
          	<div className="flex items-center space-x-2">
              <Image src="/birdvision_logo.jpg" alt="Company Logo" width={50} height={50} className="rounded-full" />
							<div>
								<h2 className="text-lg font-semibold">Junior Frontend Developer</h2>
								<p className="text-gray-600 text-sm mt-1">Bird Vision AB</p>
								<p className="text-gray-500 text-sm">India (Remote)</p>
							</div>
          	</div>

						<div className="mt-4 space-y-2">
							<p className="text-gray-700">Bird Vision is looking for an entry / mid level Frontend Developer to join our team. The ideal candidate will have strong React.js skills and experience with modern web technologies.</p>
							<div className="flex justify-between items-center">

								<div className="flex flex-row flex-wrap gap-2">
									<span className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">Entry / Mid Level</span>
									<span className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">|</span>
									<span className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">React</span>
									<span className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">React Native</span>
									<span className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">Redux</span>
									<span className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">Next.js</span>
								</div>

								<div>
									<button onClick={onClickApplyNow} className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
										Apply Now
									</button>
								</div>
							</div>
						</div>
					</div>
        </div>
      </div>

			<FrontendJobDescriptionDialog open={showJobDescription} onClose={onCloseJobDescription} onApplyNow={onClickApplyNow} />
    </div>
  );
}

