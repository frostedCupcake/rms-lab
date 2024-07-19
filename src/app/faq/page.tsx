import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="p-4 mt-[8rem] px-[8rem]">
                <h1 className="text-3xl text-center py-10 font-bold mb-4">Frequently Asked Questions (FAQ)</h1>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How can I reach IIT Hyderabad from Hyderabad city?
                    </div>
                    <div className="collapse-content">
                        <p>
                            IITHyd is located approximately 15km from Patancheru bus station functions towards Mumbai side to NH-65, Hyd-Mumbai Highway. This campus is also situated near Kandi, along the NH-9. Kindly refer to the "contact us" page of this website or click on this link for details. If you travel from Hyderabad to Mumbai, it is towards right side after Ishnapur area.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How can I join as a PhD student in this group or in biomedical engineering department?
                    </div>
                    <div className="collapse-content">
                        <p>
                            The dept. of Biomedical Engineering (BME) accepts applications for PhD admissions twice a year, tentatively in May-June and December. The details are updated approximately one month or earlier in the department home page. For further details click this link.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        I have done my MTech/MSc/equivalent course in non-BME subject area. Can I apply for PhD in the department?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Yes. Currently my lab and BME dept. is cross-disciplinary. We seek motivated candidates from different departments such as Biomedical Engineering, Biotechnology, Electrical Engineering, Materials Science, Mechanical Engineering, Life Sciences, MBBS, Pharmacy, etc. You need to show your willingness to work in inter-disciplinary research and your interest in learning new stuff.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        If I join for PhD, will I get Institute scholarship?
                    </div>
                    <div className="collapse-content">
                        <p>
                            The current scenario to get Institute scholarship is highly competitive and very limited. Therefore, students with their own funding from CSIR-NET-JRF, UGC, DST-INSPIRE, DBT-JRF, PMRF, Industrial support, or other scholarships are encouraged to apply. However, all selected candidates need to perform equally well in front of the interview committee and show their willingness to work in an inter-disciplinary work atmosphere.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        What is the prerequisite subject background requirement for admissions into PhD under this group?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Being an inter-disciplinary dept., any person with a background of Biotechnology, Cell Science, Material Science is welcome to apply for this course. Additionally, students with a background in Mechanical Engineering, Electrical Engineering, Chemistry can apply to this lab or Biomedical Engineering dept., IIT Hyderabad, provided they adjust to an ongoing problem statement of any researcher.
                        </p>
                    </div>
                </div>
            </div>
            {/* <p className='italic mx-5'>If you have any suggestions for this FAQ section, kindly send an email to subharath+rms@bme.iith.ac.in</p> */} </div>
    )
}

export default page