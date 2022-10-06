import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { match } from "assert";

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()

);

summary.buildAndPrintReport(matchReader.matches);

