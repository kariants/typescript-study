import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFilereader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HmlReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

const matchReader =  MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);


const summary2 = Summary.winsAnalysisWithHtmlReport('Man United');
summary2.buildAndPrintReport(matchReader.matches);