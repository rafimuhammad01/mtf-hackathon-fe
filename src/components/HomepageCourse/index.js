import React from 'react'
import Statistic from './Statistic'
import ContinueCourse from './ContinueCourse'
import TodayCourse from './TodayCourse'
import PerwiraMiles from './PerwiraMiles'
import TrainingAlert from './TrainingAlert'
import UpcomingCourse from './UpcomingCourse'

const HomepageCourse = () => {
	return (
		<section className="course-detail mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    	<Statistic />
                    	<ContinueCourse />
                    	<TodayCourse />
                    </div>
                    <div className="col-md-4">
                        <PerwiraMiles />
                        <TrainingAlert />
                        <UpcomingCourse />
                    </div>
                </div>
            </div>
        </section>
	)
}

export default HomepageCourse