export default function Footer({ className }: { className?: string }) {
    return (
        <div className={`${className ? className : 'bg-black text-white'} w-full h-12 flex items-center justify-center mt-12`}>
            <p>Designed by Delta.</p>
        </div>
    );
}