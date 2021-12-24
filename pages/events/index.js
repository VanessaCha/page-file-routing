import { getFeaturedEvents } from "../../dummy-date";
import EventList from "../../components/events/event-list";

function EventPage() {
    const featureEvents = getFeaturedEvents();

    return (
        <div>
           <EventList item={featureEvents}/>
        </div>
    );
}

export default EventPage;
