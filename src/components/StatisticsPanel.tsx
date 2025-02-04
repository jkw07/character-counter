type StatisticsPanelProps = {
  text: string;
};

function StatisticsPanel({ text }: StatisticsPanelProps) {
  const countSentences = (text: string): number => (text.match(/[^.!?]+[.!?]+/g) || []).length;
  const wordCount: number = text.trim().split(/\s+/).length;

  return (
    <div className="statistic-panel d-flex justify-content-around text-center align-items-stretch">
      <div className="statistic-card bg-primary p-4 rounded shadow-sm flex-fill mx-2">
        <span>[{" "}{text.length > 0 ? text.length : "0"}{" "}]</span>
        <div> Total Characters</div>
      </div>
      <div className="statistic-card bg-warning p-4 rounded shadow-sm flex-fill mx-2">
        <span>[{" "}{text.length > 0 ? wordCount : "0"}{" "}]</span>
        <div> Word Count</div>
      </div>
      <div className="statistic-card bg-danger p-4 rounded shadow-sm flex-fill mx-2">
        <span>[{" "}{countSentences(text)}{" "}]</span>
        <div> Sentence Count</div>
      </div>
    </div>
  );
}

export default StatisticsPanel;
