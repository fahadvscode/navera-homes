export function LocationMap() {
  return (
    <div className="card mt-6 overflow-hidden">
      <iframe
        title="Map of the general area around Countryside Drive and Torbram Road, Brampton, Ontario"
        src="https://maps.google.com/maps?q=Countryside+Drive+and+Torbram+Road,+Brampton,+Ontario&hl=en&z=14&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[420px] w-full border-0"
      />
    </div>
  );
}
