import {getModelForClass} from "@typegoose/typegoose";
import Druzyna from "../Models/DruzynaModel";
import Sesja from "../Models/SesjaModel";
import Zadanie from "../Models/ZadanieModel";
import Rozwiazanie from "../Models/RozwiazanieModel";
import SedziaGlowny from "../Models/SedziaGlownyModel";
import SedziaZadania from "../Models/SedziaZadaniaModel";
import Watek from "../Models/WatekModel";
import Administrator from "../Models/AdministratorModel";
import Ranking from "../Models/RankingModel";

class RepositoryClass {
    AdministratorRepo = getModelForClass(Administrator);
    RankingRepo = getModelForClass(Ranking);
    SesjaRepo = getModelForClass(Sesja);
    DruzynaRepo = getModelForClass(Druzyna);
    ZadanieRepo = getModelForClass(Zadanie);
    RozwiazanieRepo = getModelForClass(Rozwiazanie);
    SedziaGlownyRepo = getModelForClass(SedziaGlowny);
    SedziaZadaniaRepo = getModelForClass(SedziaZadania);
    WatekRepo = getModelForClass(Watek);
}

const Repository = new RepositoryClass()
export default Repository