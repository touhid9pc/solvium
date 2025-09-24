interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepItem = ({ icon, title, description }: StepProps) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="bg-neutral-800 p-4 rounded-full mb-4">{icon}</div>
    <h3 className="text-white font-medium text-xl mb-2">{title}</h3>
    <p className="text-base text-white">{description}</p>
  </div>
);

export default StepItem;
