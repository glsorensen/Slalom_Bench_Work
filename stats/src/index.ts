import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { match } from "assert";
import { HtmlReport } from "./reportTargets/HtmlReport";

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()

);

summary.buildAndPrintReport(matchReader.matches);

