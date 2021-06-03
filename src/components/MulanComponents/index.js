import React from 'react'
import UpcomingSchedule from './UpcomingSchedule'
import CalendarSchedule from './CalendarSchedule'

const MulanComponents = () => {
	return (
		<section class="my-3">
          <div class="container">
            <div class="row">
                <div class="col-md-8">
                	<UpcomingSchedule />
                </div>
                <div class="col-md-4">
                	<CalendarSchedule />
                </div>
            </div>
         </div>
        </section>
	)
}

export default MulanComponents