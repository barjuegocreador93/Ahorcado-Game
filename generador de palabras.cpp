#include <iostream>
#include <fstream>
#include <vector>
#include <ctype.h>
#include <string.h>
#include <windows.h>
using namespace std;
int kk=0;
vector<string>palabra;

bool validar(string letra)
{
    for(int i=0;i<palabra.size();i++)
    {
       if(palabra[i]==letra)return 1;

    }
    return 0;

}



void entrar_letra()
{
        string letra=" ";
        while(validar(letra)||letra==" ")
        {
            cout<<"entra la palabra "<<kk+1<<": ";
            cin>>letra;
        }
        palabra.push_back(letra);
        kk++;
}

void generar(char * nm_f, string clase, string id)
{
    ofstream sal;
    int m=0;
    if(clase=="animals")m=3;
    if(clase=="objs")m=2;
    if(clase=="cites")m=1;
    sal.open(nm_f);
    int s=0;


        sal<<"function ";
        sal<<clase<<"_"<<id;
        sal<<"(){\n";
        sal<<"var tam_";
        sal<<clase;
        sal<<"= g.";
        sal<<clase;
        sal<<".length - "<<kk<<";\n\n";
   for(int i=0;i<palabra.size();i++)
    {


        char* x=new char[palabra[i].length() + 1];
        strcpy(x,palabra[i].c_str());
        for(int j=0;j<palabra[i].length();j++)
        {
            sal<<"\t g.";
            sal<<clase;
            sal<<"[";
            sal<<s;
            sal<<"+tam_";
            sal<<clase;
            sal<<"].entrarLetra(";
            sal<<"'";
            x[j] = toupper(x[j]);
            sal<<x[j];
            sal<<"'";
            sal<<");";
            sal<<"\n";

        }
        sal<<"\n\n";
        delete []x;
        s++;

    }
    if(m!=0)
    {
        sal<<"return 0; }\n";
        sal<<"$(document).ready(function(){\n";
        sal<<"g.leng_of(";
        sal<<m;
        sal<<",";
        sal<<s;
        sal<<");\n";
        sal<<clase<<"_"<<id;
        sal<<"();\n";
        sal<<"});\n\n";
    }

    sal.close();

}

int main()
{


    string id;
    string name_file, clase;
    cout<<"nm_f: ";
    cin>>name_file;
    cout<<"Entra la clase de las palabras: ";
    cin>>clase;
    cout<<"id: ";
    cin>>id;
    char *y = new char[name_file.length() + 1];
    strcpy(y,name_file.c_str());
    int x=1;
    while(x!=-1)
    {
        system("cls");
        entrar_letra();
        cout<<"Continuar(1) o terminar (-1)?";
        cin>>x;

    }
    generar(y,clase, id);

    return 0;
}




