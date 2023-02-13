using Microsoft.AspNetCore.Mvc;

namespace ASP.NETCoreReact.Controllers;

[ApiController]
[Route("[controller]")]
public class TrademarksController : ControllerBase
{
    private static readonly List<string> Trademarks = new ()
    {
        "Google",
        "Tom n Jerry",
        "helllo"
    };
    private readonly List<string> _convertedTrademarks = Trademarks.ConvertAll(trademark => RemoveWhiteSpaces(trademark).ToLower());

    public TrademarksController()
    {
    }

    [HttpGet("get")]
    public IEnumerable<string> Get() => Trademarks;

    [HttpGet("add")]
    public async Task<ActionResult<string>> Add(string trademark)
    {
        var convertedTrademark = RemoveWhiteSpaces(trademark).ToLower();
        var isUnique = CheckForUnique(convertedTrademark);
        if (isUnique)
        {
            Trademarks.Add(trademark);
            _convertedTrademarks.Add(convertedTrademark);
        }
        else
        {
            throw new Exception($"{trademark} is already exists");
        }
        return trademark;
    }

    public bool CheckForUnique(string convertedTrademark)
    {
        return _convertedTrademarks.All(trademark => trademark != convertedTrademark);
    }

    private static string RemoveWhiteSpaces(string str)
    {
        return string.Concat(str.Where(ch=>!char.IsWhiteSpace(ch)));
    }
}