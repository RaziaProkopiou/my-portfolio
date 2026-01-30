import { useParams } from "react-router-dom";
import { caseStudies } from "../data/caseStudiesData";
import CaseStudyLayout from "../components/CaseStudyLayout";

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find(cs => cs.id === id);

  if (!study) return <p className="text-center mt-20">Case study not found.</p>;

  const related = caseStudies.filter(cs => cs.id !== id).slice(0, 3);

  return <CaseStudyLayout {...study} related={related} />;
}