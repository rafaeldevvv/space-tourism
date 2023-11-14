import utilities from  "../shared-css/utility-classes.module.css";

export default function VisuallyHidden({children}: {children: React.ReactNode}) {
   return (
      <span className={utilities.srOnly}>
         {children}
      </span>
   )
}