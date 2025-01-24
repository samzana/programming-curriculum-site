import Navbar from "@/app/components/Navbar"
import SupportCalendarCard from "@/app/components/SupportCalendarCard";
import { fridaySupportHours, mondaySupportHours, thursdaySupportHours, tuesdaySupportHours, wednesdaySupportHours } from "../data";


const SupportCalendar = () => {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '1000px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '20px 0' }}>Support Calendar</h1>
        <section style={{ margin: '50px 0', textAlign: 'left' }}>
            <SupportCalendarCard day="Monday" supportHours={mondaySupportHours}/>
            <SupportCalendarCard day="Tuesday" supportHours={tuesdaySupportHours}/>
            <SupportCalendarCard day="Wednesday" supportHours={wednesdaySupportHours}/>
            <SupportCalendarCard day="Thursday" supportHours={thursdaySupportHours}/>
            <SupportCalendarCard day="Friday" supportHours={fridaySupportHours}/>
        </section>
      </main>
    </>
  );
};

export default SupportCalendar;
