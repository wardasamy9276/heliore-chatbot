import SecureContactSection from "./SecureContactSection";
import CallSection from "./CallSection";
import RealCallSection from "./RealCallSection";
import SecureInteractionGateway from "./SecureInteractionGateway";
export default function Contact() {
  return (
    <div>
      <SecureContactSection />
      {/* <CallSection /> */}
      <SecureInteractionGateway />
      <RealCallSection />
    </div>
  );
}
